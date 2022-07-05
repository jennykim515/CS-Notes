# Git-Notes

## Basic Commands
`ls -la`: show all files and subfolders in a directory, including hidden ones

`git status`: show all changes that haven't been committed 

`git add .`: track all files

`git commit -m"title" -m"description"`: commit changes

`git commit -am"some message"`: add and commit at the same time (only works for modified files, not newly created files)

`git push`: push to repository

## Creating new directories
Establish connection to remote location by creating a new repository on Github

`git remote add origin <SSH>`: connect to remote location

`git remote -v`: list all repositories

## Branching

master: default branch / main branch

feature branch: branch off of main to work on a specific feature

`git branch`: lists branches, the * denotes the current branch

`git checkout -b featurename`: the `checkout` switches to a new branch, the `-b` flag creates a new branch

`git diff`: show what changes were made in this branch

`git push -u origin branch-feature`: set upstream - default location to push

`git pull`: get new changes (or `git pull origin master`)

`git branch -d <feature-branch>`: delete a branch

`git merge master`: to re-synchronise a branch with updates that have been made to the main branch on the repository

## Undoing in Git

`git reset`

`git reset <filename>`: unstage a file

`git reset HEAD~1`: go one commit back

`git log`: see a log of all commits

`git reset <hash>`: to go multiple commits back

`git reset --hard <hash>`: to remove instead of unstage - to go back to a certain commit

