
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
        await _service.AddDataSet(_mapper.MapRequestToDataSet(request));

        return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, [FromBody] DataSetDTO request)
    {
        var ds = _mapper.MapRequestToDataSet(request);
        ds.Id = id;
        await _service.UpdateDataSet(ds);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _service.DeleteDataSet(id);
        return Ok();
    }
}