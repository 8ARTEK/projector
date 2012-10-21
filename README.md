# Projector

A Bootstrap styled, Markdown powered, Server-side language agnostic, database-less project / mockup presentation engine.

Ever needed a quick & easy way to share your projects / mockups and progress with your clients? Tired of using heavy and overblown PM tools or even generic directory listing for just that? Search no more. Thanks to Projector now you can simply upload your mockups, set priority for each page and you're done. It also doesn't discriminate whether you're using PHP, ROR or anything else server-side, it just works. It's *that* easy.

* Demo: [http://bartsitek.com/projector](http://bartsitek.com/projector/)
* Source: [https://github.com/bartsitek/projector](https://github.com/bartsitek/projector)
* Homepage: [http://bartsitek.com](http://bartsitek.com)
* Twitter: [@BartSitek](http://twitter.com/BartSitek)

## Quick start

Follow the list below:         

1. Unpack it somewhere.
2. Edit config section inside /index.html and set up your project path (if you want different relative path for project than the default one) and mode (if you want to use external URLs).
3. Edit /project.md to change the project title, compatibility notice, and add pages to your project.
4. Create appropriate directories inside the /project directory (same names as the pages) and make sure each of them has index.html file. Case insensitive, underscores will be converted to spaces.
5. You're done. Share your Projector location with anyone you'd like!


## Tips & Tricks

- Want one of the tabs/groups removed? Simply keep "- " (dash space) as the only list item of that list
- Want to use external links instead of local directories? Edit /index.html file and change 'relative_mode' to false.


## Features

* Supersimple/quick to set up, configure and maintain thanks to Markdown syntax
* Easily customizable visually as it's based on Twitter Bootstrap
* Can be used with any server-side language as everything's on the client side
* Doesn't require any DB to run - simply copy it over and start using


## Contributing

Anyone and everyone is welcome to download and contribute! Hack away <3