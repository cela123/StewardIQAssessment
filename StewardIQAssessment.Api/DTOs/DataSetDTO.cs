using System.ComponentModel.DataAnnotations;

namespace StewardIQAssessment.Api.DTOs
{
    public class DataSetDTO
    {
        public string Name { get; set; }
        public string Domain { get; set; }
        public string Owner { get; set; }

        [Range(1, 100, ErrorMessage = "Value must be between 1 and 100.")]
        public int QualityScore { get; set; }
        public string Status { get; set; }
    }
}
