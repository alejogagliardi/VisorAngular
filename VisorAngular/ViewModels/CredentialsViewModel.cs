using FluentValidation.Attributes;
using VisorAngular.ViewModels.Validations;

namespace VisorAngular.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
