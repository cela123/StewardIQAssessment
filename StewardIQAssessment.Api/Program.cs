using StewardIQAssessment.Api.Mappers;
using StewardIQAssessment.Api.Repositories;
using StewardIQAssessment.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IDataSetRepository, InMemDataSetRepository>();
builder.Services.AddScoped<IDataSetService, DataSetService>();
builder.Services.AddScoped<IDataSetMapper, DataSetMapper>();

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
