# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
# Copyright (C) 2019 Northwestern University.
#
# Invenio App RDM is free software; you can redistribute it and/or modify it
# under the terms of the MIT License; see LICENSE file for more details.

"""JS/CSS Webpack bundles for theme."""

from __future__ import absolute_import, print_function

import os
from flask_webpackext import WebpackBundle
from flask import current_app


theme = WebpackBundle(
    __name__,
    'assets',
    entry={
        'invenio-app-rdm-theme': os.path.join('./scss/instance_theme', current_app.config.get(
            'INSTANCE_THEME_FILE', './scss/invenio_app_rdm/theme.scss')),
        'invenio-app-rdm-js': './js/invenio_app_rdm/inveniordm.js',
    },
    dependencies={
        # add any additional npm dependencies here...
    }
)
