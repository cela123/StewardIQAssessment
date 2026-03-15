using StewardIQAssessment.Api.Models;

public interface IDataSetService
{
    Task<IEnumerable<DataSet>> GetDataSets();
    Task AddDataSet(DataSet data);
    Task DeleteDataSet(Guid Id);
}