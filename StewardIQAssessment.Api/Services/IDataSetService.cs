using StewardIQAssessment.Api.Models;

public interface IDataSetService
{
    Task<IEnumerable<DataSet>> GetDataSets();
    Task AddDataSet(DataSet data);
    Task UpdateDataSet(DataSet data);
    Task DeleteDataSet(Guid Id);
}