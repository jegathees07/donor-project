
function openSlideBar(){
    document.getElementById('dropdown-menu').style.display="block"
}
function closeSlideBar(){
    document.getElementById('dropdown-menu').style.display="none"
}


const SliderImages=document.querySelectorAll('.slide-card');
console.log(SliderImages);
let currentSlide=0;


document.addEventListener("DOMContentLoaded",InitialImage);

function InitialImage() {
    if(SliderImages.length>0){
        SliderImages[currentSlide].classList.add("displayImage");
    }
}
function ShowSlide(index){
    if (index>=SliderImages.length) {
        currentSlide=0;
    }
    else if (index < 0) {
        currentSlide=SliderImages.length - 1;
    }
    
    SliderImages.forEach(slide =>{
        slide.classList.remove("displayImage");
    });
    SliderImages[currentSlide].classList.add("displayImage");
}

function NextImage(){
    currentSlide++;
    ShowSlide(currentSlide);
}

function PrevImage(){
    currentSlide--;
    ShowSlide(currentSlide);
};

// search blood banks

const BloodBankData=[{name:"Sri Ramakrishna Hospital",url:"https://www.sriramakrishnahospital.com/"},
                    {name:"Shanthi Blood Bank",url:"http://shanthisocialservices.org/bloodbank.html"},
                    {name:"Coimbatore Medical College Hospital",url:"https://www.gmcesi.co.in/"},
                    {name:"Ganga Blood Bank",url:"https://www.gangahospital.com/blood_bank"},
                    {name:"IMA Blod Bank",url:"https://coimbatoreima.com/blood-bank/"},
                    {name:"Swami Vivekananda Blood Bank",url:"https://www.justdial.com/Coimbatore/Swami-Vivekananda-Blood-Centre-Ram-Nagar-Ram-Nagar/0422PX422-X422-220329222314-D9U2_BZDET"},
                    {name:"Sheela Hospitals Blood Bank",url:"http://www.sheelahospital.in/"},
                    {name:"Bio Medical Service Blood Bank",url:"https://www.medindia.net/directories/emergency-medical-services/blood-bank/the-coimbatore-bio-medical-services-blood-bank-coimbatore-55291.htm"},
                    {name:"G Kuppusamy Naidu Memorial Blood Bank",url:"https://www.gknmhospital.org/"},
                    {name:"Lions Blood Bank",url:"https://www.lionsbloodbank.net/"},
                    {name:"KG Blood Bank",url:"https://www.kghospital.com/blood-bank.html"},
                    {name:"Kongunad Blood Bank",url:"https://www.genericdrugscan.com/blood-banks/tamil-nadu/coimbatore/coimbatore/kongunad-hospitals-private-limited-blood-bank"}];

                    function InitialSearch(){
                        const SearchButton=document.getElementById('searchbutton');
                        SearchButton.addEventListener("click",SearchBloodBank);
                    }

                    function SearchBloodBank(){
                        const InputValue=document.getElementById('searchInput').value;
                        const ResultContainer=document.getElementById('resultsContainer');
                        ResultContainer.innerHTML="";

                        const Results=BloodBankData.filter(data => data.name.toLowerCase().includes(InputValue.toLowerCase()));

                        if (InputValue.length === 0) {
                            ResultContainer.innerHTML="";
                        }
                        else if (Results.length > 0) {
                            Results.forEach(item =>{
                                const showResult=document.createElement('div');
                                showResult.className='result';
                                showResult.innerHTML=`<a href="${item.url}">${item.name}</a>`;
                                ResultContainer.appendChild(showResult);
                                showResult.style.display = 'block';
                            });
                        }
                        else{
                            const noResult=document.createElement('p');
                            noResult.textContent="No results found";
                            ResultContainer.appendChild(noResult);
                        }
                }
                document.addEventListener("DOMContentLoaded",InitialSearch); 