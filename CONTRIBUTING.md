# Contributing to covid19-calculator

Thank you for your interest in contributing. Below is some brief guidance for contributing to this project.

## Authors

See [AUTHORS](https://github.com/deptofdefense/covid19-calculator/blob/master/AUTHORS) for a list of contributors. When making a contribution, please add yourself to the list if you like.

## Contact

Please direct any further questions about contributing to <code@dds.mil>.

## Issues

Please submit bugs or issues to <https://github.com/deptofdefense/covid19-calculator/issues>.

## Licensing

This project constitutes a work of the United States Government and is not subject to domestic copyright protection under 17 USC § 105. However, because the project utilizes code licensed from contributors and other third parties, it therefore is licensed under the MIT License.

Your contribution to this project is made with agreement to these licensing terms and is irrevocable.

## Pull Requests

When submitting a contribution as a pull request, please include updates to the documentation, examples, and tests as appropriate. The maintainers will review your pull request as soon as available.

## Versioning

There are two types of versioning for this project: package versioning and calculator versioning. When submitting a contribution, please update the version numbers as appropriate following the process below.

### Package Versioning

Package versioning is the version number included in the [package.json](package.json) and used to ensure the intended version of this repo is imported into other programs. This version is encoded as `major.minor.patch` semantic version. The minor version number will be incremented with every API change until a stable version is released as `1.0.0`. To only receive patch updates, use `~0.4.0`.

### Calculator Versioning

Calculator versioning has been taken from internal DDS nomenclature and does not perfectly match semantic versioning. Each version will include a small medical statement about the medical opinion at the time of the change and a clear [changelog](CHANGELOG.md) about the data and scoring.

Moving forward from version `1.4.0`, version number will be guided by the rules below:

- **Patch** updates will typically be simple fixes that ultimately do not affect the scoring, for example typos in a prompt, updates to typescript types or other small adjustments.
- **Minor** updates will include changes that affect the scores including changes to a specific option's score and the addition or removal of options. Anything that would start to produce a different score will likely fall into this category.
- **Major** updates will only occur if larger scale changes occur. This could include addition or removal of score categories, a significant shift in approach, or significant change in API.
