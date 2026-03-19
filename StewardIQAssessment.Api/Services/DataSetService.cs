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
            await _repo.AddAsync(data);
        }

        public async Task UpdateDataSet(DataSet data)
        {
            await _repo.UpdateAsync(data);
        }

        public async Task DeleteDataSet(Guid id)
        {
            await _repo.DeleteAsync(id);
        }
    }
}
