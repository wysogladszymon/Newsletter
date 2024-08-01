using backend.Services;
using DotNetEnv;

var builder = WebApplication.CreateBuilder(args);

// load environment variables
Env.Load();

var mongoPassword = Environment.GetEnvironmentVariable("MONGO_DB_PASSWORD") ?? " ";
string dbName = "newsletter";
// Add services to the container.
builder.Services.AddSingleton<UserService>(sp => new UserService(mongoPassword, dbName));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.Run();
