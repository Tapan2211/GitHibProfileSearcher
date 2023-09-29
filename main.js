const input = document.querySelector("input");

input.oninput = function () {
  const userID = input.value;

  getGithubProfile(userID);
};

async function getGithubProfile(id) {
    if (id === "") {
      document.getElementById("cardMain").innerHTML = "";
      return;
    }
    const response = await fetch(`https://api.github.com/users/${id}`);
    const data = await response.json();
  
    setDataGitHub(data);
  }

  function setDataGitHub(data) {
    const {
      avatar_url,
      name,
      bio,
      followers,
      following,
      public_repos,
      twitter_username,
      location
    } = data;
  
    const card = document.getElementById("cardMain");
    card.innerHTML = `
    <div class="card">
            <div class="row card-main">
              <div class="col-lg-2 d-flex align-items-center justify-content-center text-center"">
                  <div class="d-flex align-items-center justify-content-center p-2">
                      <img class="user-img"
                          src="${avatar_url}"
                          alt="">
                  </div>
              </div>
              <div class="col-lg-10 d-flex align-items-center justify-content-center text-start">
                <div class="card-body">
                  <h5 class="text-title">${name === null ? "-" : name}</h5>
                  <p class="text-detail">
                    ${bio === null ? "-" : bio}
                  </p>
  
                  <div class="col-lg-12 d-flex align-items-start justify-content-start text-start">
                      <p class="text-detail">
                          followers: ${followers === null ? "-" : followers}
                        </p>
  
                        <p class="text-detail">
                            following: ${following === null ? "-" : following}
                          </p>
  
                          <p class="text-detail">
                              repos: ${public_repos === null ? "-" : public_repos}
                            </p>
                  </div>
  
                  <div class="col-lg-12 d-flex align-items-start justify-content-start text-start">
                      <p class="text-detail">
                          Twitter: ${
                            twitter_username === null ? "-" : twitter_username
                          }
                        </p>
  
                        <p class="text-detail">
                            Location: ${location === null ? "-" : location}
                          </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
  }
  