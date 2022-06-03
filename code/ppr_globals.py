#!/usr/bin/env /usr/local/bin/python3
"""
Created by Jim Kaubisch on 2022-06-02.
"""

import os

PPR_INI_FILE_PATH = '~/Projects/pianoPreReading/code/ppr_config.ini'

from pprint import pprint
from configparser import ConfigParser
config = ConfigParser()

if not config.read(os.path.expanduser(PPR_INI_FILE_PATH)):
    raise IOError(f'ppr_globals: Can\'t find config file "{os.path.expanduser(PPR_INI_FILE_PATH)}"')

#
# --------------------------------------------------------------
#

if __name__ == '__main__':
    pprint(config["app"]["name"])