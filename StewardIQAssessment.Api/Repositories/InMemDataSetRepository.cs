using StewardIQAssessment.Api.Models;
using StewardIQAssessment.Api.Repositories;
using System.Threading.Tasks;

public class InMemDataSetRepository : IDataSetRepository
{
    private static List<DataSet> _datasets = new();

    public async Task<IEnumerable<DataSet>> GetAllAsync()
    {
        return await Task.FromResult(_datasets.AsEnumerable());
    }

    public async Task<DataSet?> GetByIdAsync(Guid id)
    {
        var task = _datasets.FirstOrDefault(t => t.Id == id);
        return await Task.FromResult(task);
    }

    public async Task AddAsync(DataSet data)
    {
        if (data.Id == Guid.Empty)
        {
            data.Id = Guid.NewGuid(); 
        }

        _datasets.Add(data);

        return;
    }

    public async Task DeleteAsync(Guid id)
    {
        var task = _datasets.FirstOrDefault(t => t.Id == id);

        if (task != null)
        {
            _datasets.Remove(task);
        }

        return;
    }
}