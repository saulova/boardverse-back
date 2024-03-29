<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#"><img src="https://github.com/saulova/boardverse-front/blob/main/public/logo.png" alt="Boardverse" width="400"></a>
  <br/>
  <br/>
  
[![Downloads][downloads-shield]]()
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

  <p align="center">
    This is an open source virtual table to play your favorite Board Game or RPG with your friends, <strong>it's currently under development</strong>.
    <br />
    <a href="https://github.com/saulova/boardverse-back/issues">Report Bug</a>
    ·
    <a href="https://github.com/saulova/boardverse-back/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#code-of-conduct">Code of Conduct</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Boardverse is an Open Source platform for playing board games and RPG, currently under development, it's priority will be mobile devices but need to be usable on other devices.

I'm unable to work full-time on this project, sorry for any failures and difficulties, I'll answer your questions as soon as possible, contributions are always welcome, thank you.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you can get a local copy and run the Boardverse Back-End.
Follow these steps.

REMEMBER: it's currently under development, you need read code to understand some problems and use it in this stage, at this point its not user friendly.

### Prerequisites

- NPM or Yarn

### Installation

<ol><li>

Clone the repo

```sh
git clone https://github.com/saulova/boardverse-back.git
```

</li><li>

Install packages

With NPM

```sh
npm install
```

With Yarn

```sh
yarn install
```

</li><li>

Use docker compose to create PostgreSQL and Adminer containers

Edit <b>docker/docker-compose.yml</b> with your data and run

```sh
cd docker
docker-compose up -d
cd ../
```

</li><li>
Run Prisma migration

```sh
npx prisma migrate dev
```

</li><li>

Run as Developer (recommended at this moment)

With NPM

```sh
npm run dev
```

With Yarn

```sh
yarn dev
```

</li></ol>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CODE OF CONDUCT -->

## Code of Conduct

Before contributing, please read and follow our [`CODE_OF_CONDUCT.md`](https://github.com/saulova/boardverse-back/blob/main/CODE_OF_CONDUCT.md)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please create a pull request. You can also simply open an issue with the tag "enhancement", In case you like to contribute financially, you can send any value of ETH, USDT, USDC, DAI, LINK, UNI, LTO and others Ethereum contract coins to:<br/>
<br/>
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)](#)<br/>
`Wallet Address: 0xB3ca91EEA44495cdC21a81D760fAB83705783A9b`
<br/>
<br/>
Don't forget to give the project a star! Thanks!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Read our [`ROADMAP.md`](https://github.com/saulova/boardverse-back/blob/main/ROADMAP.md) and see the [open issues](https://github.com/saulova/boardverse-back/issues) for a list of known issues.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Every code accepted in this repository is licensed under MPL-2.0. You must be careful to not include any code that can not be licensed under this license.

See [`LICENSE`](https://github.com/saulova/boardverse-back/blob/main/LICENSE) for more information and ask if you have any questions.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[downloads-shield]: https://img.shields.io/github/downloads/saulova/boardverse-back/total?style=flat-square
[contributors-shield]: https://img.shields.io/github/contributors/saulova/boardverse-back.svg?style=flat-square
[contributors-url]: https://github.com/saulova/boardverse-back/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/saulova/boardverse-back.svg?style=flat-square
[issues-url]: https://github.com/saulova/boardverse-back/issues
[license-shield]: https://img.shields.io/github/license/saulova/boardverse-back?style=flat-square
[license-url]: https://github.com/saulova/boardverse-back/blob/main/LICENSE
