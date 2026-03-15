using StewardIQAssessment.Api.DTOs;
using StewardIQAssessment.Api.Models;

namespace StewardIQAssessment.Api.Mappers
{
    public class DataSetMapper : IDataSetMapper
    {
        public DataSet MapRequestDataSetDTO(DataSetDTO dataSet)
        {
            return new DataSet
            {
                Name = dataSet.Name,
                Domain = dataSet.Domain,
                Owner = dataSet.Owner,
                QualityScore = dataSet.QualityScore,
                Status = dataSet.Status,
            };
        }
    }
}
