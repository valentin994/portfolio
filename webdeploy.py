import sys
import os


def webDeploy(commitMsg):
    os.system('cmd /c "ng build --prod --output-path docs --base-href /portfolio/"')
    os.system('cmd /c "git status "')
    os.system('cmd /c "git add . "')
    print("I have added some shit")
    os.system('cmd /c "git commit -m %s "'%commitMsg)
    os.system('cmd /c "git push "')
    os.system('cmd /c "cd docs "')




if __name__ == "__main__":
    webDeploy(sys.argv[1])