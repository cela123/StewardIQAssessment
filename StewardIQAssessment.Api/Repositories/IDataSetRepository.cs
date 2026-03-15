using StewardIQAssessment.Api.Models;

namespace StewardIQAssessment.Api.Repositories;

public interface IDataSetRepository
{
    Task<IEnumerable<DataSet>> GetAllAsync();
    Task<DataSet?> GetByIdAsync(Guid id);
    Task AddAsync(DataSet product);
    Task DeleteAsync(Guid id);
}