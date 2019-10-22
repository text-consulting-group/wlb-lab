#관리 매뉴얼

##콘텐츠 타입

###아티클(article)
- 텍소노미로 구성된 채널 선택시에 공지 / 실험 / 아카데미를 선택해서 작성한다.
- 아티클 콘텐츠 타입으로 구성된 세 가지 게시물은 해당 채널(텍소노미)선택 분류자에 따라 각각 다른 View로 노출된다.
- 공지를 선택하면 http://wlb-lab.org/notice 뷰로 노출된다.
- 실험으로 선택하면 http://wlb-lab.org/experiment 뷰로 노출된다.
- 아카데미를 선택하면 http://wlb-lab.org/academy 뷰로 노출된다.

###연구(research_info)
- 일생활균형연구소에서 참여한 연구기록 정보 중심으로 콘텐츠타입 신규 구성
- 년도별로 정리된 엑셀목록이 있음.
- 연구를 선택하면 http://wlb-lab.org/research 뷰로 노출된다.


###베이직 페이지(Basic Page)
- 스테틱 페이지를 표현한다. 

####소개

####함께하는 사람들



###랜딩 페이지(Landing Page)
- 스테틱 페이지를 표현한다. 

##홈 레이아웃 수정

- 홈 레이아웃 구성을 수정한다. http://wlb-lab.org/en/admin/structure/layouts
- 상단 공지 슬라이드(주요한 공지 / 메세지) http://wlb-lab.org/ko/admin/structure/entityqueue/featured_items/featured_items 수정한다. 
- 사업영역



##메뉴추가와 채널 / 태그 사용 관련
- 

###채널 사용방법

###태그 사용방법




##People(사용자 관리)

###Administration

###Main-Editor

###Membership-Editor



# Composer based Thunder installation

This project template should provide a kickstart for managing your site dependencies with [Composer](https://getcomposer.org/).

If you want to know how to use it as replacement for
[Drush Make](https://github.com/drush-ops/drush/blob/master/docs/make.md) visit
the [Documentation on drupal.org](https://www.drupal.org/node/2471553).

## Usage

First you need to install [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) and [Git](https://git-scm.com).

> Note: The instructions below refer to the [global composer installation](https://getcomposer.org/doc/00-intro.md#globally).
You might need to replace `composer` with `php composer.phar` (or similar) 
for your setup.

After that you can create the project:

```
composer create-project burdamagazinorg/thunder-project thunder
```

With `composer require ...` you can download new dependencies to your 
installation.

```
cd thunder
composer require drupal/devel:1.*
```

The `composer create-project` command passes ownership of all files to the 
project that is created. You should create a new git repository, and commit 
all files not excluded by the .gitignore file.

## What does the template do?

When installing the given `composer.json` some tasks are taken care of:

* Drupal will be installed in the `docroot`-directory.
* Autoloader is implemented to use the generated composer autoloader in `vendor/autoload.php`,
  instead of the one provided by Drupal (`docroot/vendor/autoload.php`).
* Modules (packages of type `drupal-module`) will be placed in `docroot/modules/contrib/`
* Theme (packages of type `drupal-theme`) will be placed in `docroot/themes/contrib/`
* Profiles (packages of type `drupal-profile`) will be placed in `docroot/profiles/contrib/`
* Downloads Drupal scaffold files such as `index.php`, or `.htaccess`
* Creates `sites/default/files`-directory.
* Latest version of drush is installed locally for use at `bin/drush`.
* Latest version of DrupalConsole is installed locally for use at `bin/drupal`.

## Installing Thunder

Create project will install Thunder into the docroot directory. You can now install Thunder as you would with any Drupal 8 site. See: [Drupal installation guide](https://www.drupal.org/node/1839310).
 
## Updating Thunder

To update Thunder, Drupal or any module to the newest version, constrained by the specified version in `composer.json`, execute `composer update`. This command will check every dependency for a new version, downloads it and updates the `composer.lock` accordingly.
After that you can run `drush updb` in the docroot folder to update the database of your site.

### File update

This project will attempt to keep all of your Thunder and drupal core files up-to-date; the 
project [drupal-composer/drupal-scaffold](https://github.com/drupal-composer/drupal-scaffold) 
is used to ensure that your scaffold files are updated every time drupal/core is 
updated. If you customize any of the "scaffolding" files (commonly .htaccess), 
you may need to merge conflicts if any of your modfied files are updated in a 
new release of Drupal core.

Follow the steps below to update your thunder files.

1. Run `composer update burdamagazinorg/thunder`
1. Run `git diff` to determine if any of the scaffolding files have changed. 
   Review the files for any changes and restore any customizations to 
  `.htaccess` or `robots.txt`.
1. Commit everything all together in a single commit, so `web` will remain in
   sync with the `core` when checking out branches or running `git bisect`.
1. In the event that there are non-trivial conflicts in step 2, you may wish 
   to perform these steps on a branch, and use `git merge` to combine the 
   updated core files with your customized files. This facilitates the use 
   of a [three-way merge tool such as kdiff3](http://www.gitshah.com/2010/12/how-to-setup-kdiff-as-diff-tool-for-git.html). This setup is not necessary if your changes are simple; 
   keeping all of your modifications at the beginning or end of the file is a 
   good strategy to keep merges easy.

## FAQ

### Should I commit the contrib modules I download

Composer recommends **no**. They provide [argumentation against but also 
workrounds if a project decides to do it anyway](https://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md).

### How can I apply patches to downloaded modules?

If you need to apply patches (depending on the project being modified, a pull 
request is often a better solution), you can do so with the 
[composer-patches](https://github.com/cweagans/composer-patches) plugin.

To add a patch to drupal module foobar insert the patches section in the extra 
section of composer.json:
```json
"extra": {
    "patches": {
        "drupal/foobar": {
            "Patch description": "URL or local path to patch"
        }
    }
}
```
### Should I commit the scaffolding files?

The [drupal-scaffold](https://github.com/drupal-composer/drupal-scaffold) plugin can download the scaffold files (like
index.php, update.php, …) to the web/ directory of your project. If you have not customized those files you could choose
to not check them into your version control system (e.g. git). If that is the case for your project it might be
convenient to automatically run the drupal-scaffold plugin after every install or update of your project. You can
achieve that by registering `@drupal-scaffold` as post-install and post-update command in your composer.json:

```json
"scripts": {
    "drupal-scaffold": "DrupalComposer\\DrupalScaffold\\Plugin::scaffold",
    "post-install-cmd": [
        "@drupal-scaffold",
        "..."
    ],
    "post-update-cmd": [
        "@drupal-scaffold",
        "..."
    ]
},
```
### How can I prevent downloading modules from thunder, that I do not need?

To prevent downloading a module, that Thunder provides but that you do not need, add a replace block to your composer.json:

```json
"replace": {
    "drupal/features": "*"
}
```

This example prevents any version of the feature module to be downloaded.
