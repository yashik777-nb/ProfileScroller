const data = [
  {
    name: "Test1",
    age: 24,
    gender: "Male",
    location: "Britan",
    lookingFor: "Women",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Test2",
    age: 23,
    gender: "Male",
    location: "Britan",
    lookingFor: "Women",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Test3",
    age: 25,
    gender: "Male",
    location: "Britan",
    lookingFor: "Women",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

// Profile Iterator
function profileIterator(profiles) {
  let index = 0;
  return {
    next: function (profile) {
      return index < profiles.length
        ? { value: profiles[index++], done: false }
        : { done: true };
    },
  };
}

const profiles = profileIterator(data);

document.addEventListener("DOMContentLoaded", nextProfileDisplay);

document.getElementById("next").addEventListener("click", nextProfileDisplay);

function nextProfileDisplay(e) {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    </ul>
    `;
    document.getElementById("imageDisplay").innerHTML = `
        <img src="${currentProfile.image}"></img>
    `;
  } else {
    window.location.reload();
  }
}
