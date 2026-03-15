
using Microsoft.AspNetCore.Mvc;
using StewardIQAssessment.Api.DTOs;
using StewardIQAssessment.Api.Mappers;
using StewardIQAssessment.Api.Models;

[ApiController]
[Route("api/[controller]")]
public class DataSetController : ControllerBase
{
    private readonly IDataSetService _service;
    private readonly IDataSetMapper _mapper;

    public DataSetController(IDataSetService service, IDataSetMapper mapper)
    {
        _service = service;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await _service.GetDataSets());
    }

    [HttpPost]
    public async Task<IActionResult> Create(DataSetDTO request)
    {
        DataSet dataSet = _mapper.MapRequestDataSetDTO(request);

        await _service.AddDataSet(dataSet);

        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _service.DeleteDataSet(id);
        return Ok();
    }
}