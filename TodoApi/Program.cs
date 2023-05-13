using Microsoft.AspNetCore.Mvc;
using TodoApi;
using Microsoft.OpenApi.Models;
var policyName = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
                      builder =>
                      {
                          builder
                            .WithOrigins("*")
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                      });
});
builder.Services.AddDbContext<ToDoDbContext>();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "ToDo API",
        Description = "An ASP.NET Core Web API for managing ToDo items",
    });
});
var app = builder.Build();

app.UseCors(policyName);
// if (app.Environment.IsDevelopment())
// {
app.UseSwagger();
app.UseSwaggerUI(options =>
{
options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
options.RoutePrefix = string.Empty;
});
// }

app.MapGet("/items", (ToDoDbContext db) => { return db.Items.ToList(); });
app.MapPost("/items", async (ToDoDbContext db, Item item) =>
{
    await db.Items.AddAsync(item);
    await db.SaveChangesAsync();
    return item;
});
app.MapPut("/items/{id}", async (ToDoDbContext db, int id, Item item) =>
{
    var itm = db.Items.First(itm => itm.Id == id);
    //itm.Name=item.Name;
    itm.IsComplete = item.IsComplete;
    await db.SaveChangesAsync();
    return itm;

});
app.MapDelete("/items/{id}", async (ToDoDbContext db, int id) =>
{
    var item = db.Items.First(itm => itm.Id == id);
    db.Items.Remove(item);
    await db.SaveChangesAsync();
    return item;
});
app.MapGet("/",()=>"The API is running");
app.Run();
