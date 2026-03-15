namespace StewardIQAssessment.Api.Models
{
    public class DataSet
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Domain { get; set; }
        public string Owner { get; set; }
        public int QualityScore { get; set; }
        public string Status { get; set; }
    }
}
