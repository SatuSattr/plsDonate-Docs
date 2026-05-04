# Getting Started

import { Steps } from 'nextra/components'

Welcome! This guide will walk you through installing and setting up **plsDonate Express** on your PaperMC server.

## Requirements

- PaperMC **1.19+**
- Java **17+**
- Server with operator/admin access

## Installation

<Steps>

### Download the Plugin

Download the latest `plsDonate-Express.jar` from [GitHub Releases](https://github.com/satusattr/plsDonate).

### Place in Plugins Folder

Copy the `.jar` file into your server's `/plugins` directory.

### Start the Server

Start (or restart) your server. plsDonate Express will generate its configuration files automatically.

### Configure the Plugin

Edit the generated `config.yml` in `/plugins/plsDonate-Express/`. See the [Configuration](/express/configuration) page for all available options.

### Reload

Run `/plugman reload plsDonateExpress` or restart the server to apply your changes.

</Steps>
