using AutoMapper;
using VisorAngular.Models;

namespace VisorAngular.ViewModels.Mappings
{
    public class EntityToViewModelMappingProfile : Profile
    {
        public EntityToViewModelMappingProfile()
        {
            //CreateMap<ApplicationUser, ApplicationUserViewModel>().ForMember(auvm => auvm.Email, map => map.MapFrom(au => au.Email));
        }
        
    }
}
