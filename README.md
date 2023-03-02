<p id="readme-top"></p>

[![License Shield](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](./LICENSE)
[![LinkedIn Shield](https://img.shields.io/badge/LinkedIn-555555?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mateo-wallace/)

# Basic Pokemon Clone

## Description

Basic Pokemon Clone is an in browser game built with basic JavaScript and HTML in order to run a game. It allows the user to walk around a world map, stop moving based on item boundaries, enter combat by walking within tall grass, play and change music based on the situation, and talk to npc's and cycle through dialogue. The reason for building this game was to get a basic grasp of game development concepts before moving on to Unity and C# programming.

While building this project I learned to:

- Edit and style the `<canvas>` element using JS
- Build custom classes with reusable methods
- Cycle through the different frames of a sprite
- Build a map with boundaries, characters, backgrounds, foregrounds, and battle zones using [Tiled Map Editor](https://www.mapeditor.org/)
- Find free assets from [itch.io](https://itch.io/)

### Built With

[![JavaScript Shield](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?&style=for-the-badge&logo=javascript&logoColor=272727)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML Shield](https://img.shields.io/badge/HTML5-E34F26?&style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![Tiled Shield](https://img.shields.io/badge/Tiled-3645FF?&style=for-the-badge&logo=tidal&logoColor=white)](https://www.mapeditor.org/)

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Usage

Navigate to [mateo-wallace.github.io/MP3-Basic-Pokemon-Clone/](https://mateo-wallace.github.io/MP3-Basic-Pokemon-Clone/) in order to see the site. You will be presented with the your player standing outside of their house. It will look something like this:

![example of deployed site](./assets/img/deployed.png)

- To **move** either type `w, a, s, d` or click on the ones on screen. The on screen version was added to allow for mobile functionality.

- To **interact with in an npc** walk up to them until you can no longer move then use `space`. This will initiate their dialogue. Your movement will be haulted while dialogue in initiated. In order to continue through npc dialogue simply continue to use `space` until they stop talking.

- To **enter combat** enter a dark green patch of grass, like this one:

  ![dark green patch of grass](./assets/img/grass-example-crop.png)

  You will have a 1.5% chance of entering combat while walking on these tiles. Once you have entered combat your screen will shift to a battle scene like this one:

  ![battle scene example](./assets/img/battle-scene-example.png)

  From within the battle scene simply select the type of attack you would like to use.

  - Tackle does 10% damage
  - Fireball does 25% damage
  - Heal recovers the players health by 10%
  - Disintegrate does 100% damage, basically an instakill

  After every action text will appear on screen describing what happened. Click on the text box in order to cycle through the text. Once combat is completed you will be brought back to the overworld.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

If you would like to download the project locally:

1. Fork the Project
1. Clone the Repo to your machine
1. To run the game right click `index.html` and select `Open In Default Browser`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

If you have a suggestion that would make the repo better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
1. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
1. Push to the Branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

If all of this is new to you take a look at the [GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Mateo Wallace - [GitHub](https://github.com/Mateo-Wallace) - [Email](mailto:mateo.t.wallace@gmail.com) - [LinkedIn](https://www.linkedin.com/in/mateo-wallace/)

Project Link: [MP3-Basic-Pokemon-Clone](https://github.com/Mateo-Wallace/MP3-Basic-Pokemon-Clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

I am appreciative for the source code, ideas, and inspiration that all of these repos and creators have provided to this project. If you see anything within my code that you recognize as yours and don't see yourself listed here please feel free to open an issue and I will add you!

- [Chris Courses - Pokemon JavaScript Game Tutorial with HTML Canvas](https://www.youtube.com/watch?v=yP5DKzriqXA)
- [chriscourses - pokemon-style-game](https://github.com/chriscourses/pokemon-style-game)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
