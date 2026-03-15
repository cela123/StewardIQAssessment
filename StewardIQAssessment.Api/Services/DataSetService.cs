using StewardIQAssessment.Api.Models;
using StewardIQAssessment.Api.Repositories;

namespace StewardIQAssessment.Api.Services
{
    public class DataSetService : IDataSetService
    {
        private readonly IDataSetRepository _repo;

        public DataSetService(IDataSetRepository repo)
        {
            _repo = repo;
        }

        public async Task<IEnumerable<DataSet>> GetDataSets()
        {
            return await _repo.GetAllAsync();
        }

        public async Task AddDataSet(DataSet data)
        {
            var dataSet = new DataSet
            {
                Id = Guid.NewGuid(),
                Name = data.Name,
                Domain = data.Domain,
                Owner = data.Owner,
                QualityScore = data.QualityScore,
                Status = data.Status
            };

            await _repo.AddAsync(dataSet);
        }

        public async Task DeleteDataSet(Guid id)
        {
            await _repo.DeleteAsync(id);
        }
    }
}
