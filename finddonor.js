function openSlideBar(){
    document.getElementById('dropdown-menu').style.display="block"
}
function closeSlideBar(){
    document.getElementById('dropdown-menu').style.display="none"
}

const bloodDonors = [
    {
        name: "Jegathees",
        gender: "Male",
        bloodGroup: "O+",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"91XXXXXX08",
    },
    {
        name: "Dharun",
        gender: "Male",
        bloodGroup: "A-",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"91XXXXXX12",
    },
    {
        name: "Praveen",
        gender: "Male",
        bloodGroup: "B+",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"90XXXXXX71",
    },
    {
        name: "Arun",
        gender: "Male",
        bloodGroup: "AB-",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"95XXXXXX09",
    },
    {
        name: "Gokul",
        gender: "Male",
        bloodGroup: "O-",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"91XXXXXX12",
    },
    {
        name: "Pradeep",
        gender: "Male",
        bloodGroup: "B+",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"91XXXXXX00",
    },
    {
        name: "Vijay",
        gender: "Male",
        bloodGroup: "AB+",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"91XXXXXX81",
    },
    {
        name: "Bhuvanesh",
        gender: "Male",
        bloodGroup: "A+",
        place: "Coimbatore",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
        PhoneNo:"91XXXXXX99",
    }
];

function getDonorInfo() {
    const bloodDonor = document.getElementById("blood-do").value.toUpperCase();
    const placeDonor = document.getElementById("place-do").value.toLowerCase();

    const result = bloodDonors.filter(donor => {
        return (
            (bloodDonor === "" || donor.bloodGroup.toUpperCase() === bloodDonor) &&
            (placeDonor === "" || donor.place.toLowerCase().includes(placeDonor))
        );
    });

    displayResult(result);
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (result.length === 0) {
        resultDiv.innerHTML = "No matching donor found.";
        return;
    }

    result.forEach(donor => {
        const donorInfo = document.createElement("div");
        donorInfo.classList.add("result-container")
        donorInfo.innerHTML = `
            <img src="${donor.imageUrl}" alt="${donor.name}" style="width:100px;height:100px;">
            <div class="donor-details">
            <p>Name: ${donor.name}</p>
            <p>Gender: ${donor.gender}</p>
            <p>Blood Group: ${donor.bloodGroup}</p>
            <p>Phone-No: ${donor.PhoneNo}</p>
            </div>
        `;
        resultDiv.appendChild(donorInfo);
    });
}
