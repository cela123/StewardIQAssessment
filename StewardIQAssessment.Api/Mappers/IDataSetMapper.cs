using StewardIQAssessment.Api.DTOs;
using StewardIQAssessment.Api.Models;

namespace StewardIQAssessment.Api.Mappers;

public interface IDataSetMapper
{
    DataSet MapRequestDataSetDTO(DataSetDTO dataSet);
}
