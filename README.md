# RoarCoder FrontEnd Microservice

This project is frontend (only) of my website, [RoarCoder](https://roarcoder.dev).

# Motivation

The goal is to convert the hardcoded information to come dynamically from the API.

# Prerequisites

Familiarity with AJAX, jQuery, HTML and CSS.

# Getting Started

1. Install [Ruby](https://www.ruby-lang.org/en/downloads/) version 2.4.0 or above (check by `ruby -v`)
2. Install [RubyGems](https://rubygems.org/pages/download) installed (check by runnung `gem -v`) 
3. Install [Jekyll](https://jekyllrb.com/docs/installation/macos/) for macOS

# Running The Project

## Locally

1. Clone or download the repository.
2. Open in Visual Studio Code or any of your favourite text editor.
3. Check if it builds successful by running `jekyll serve` in the terminal. If you get an error, it's most likely that you don't have the gem `jekyll-watch` as your dependancy.
4. How to install jekyll watch? See next two steps
5. Include `gem 'jekyll-watch'` in your GemFile.
6. Repeat step 3.
7. If everything goes well, TADAAAAA!! Your coolest Jekyll website is running locally.
8. OPTIONAL - Get production version of your website by running `jekyll build` and run then `jekyll serve` in the `_site`'s folder
