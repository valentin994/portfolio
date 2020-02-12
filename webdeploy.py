import sys
import os

BASE_DIR = os.getcwd()

def webDeploy(commitMsg):
    os.system('cmd /c "ng build --prod --output-path docs --base-href /portfolio/"')
    os.chdir(BASE_DIR + "\docs")
    os.system('cmd /c "copy index.html 404.html"')
    os.chdir(BASE_DIR)
    os.system('cmd /c "git status "')
    os.system('cmd /c "git add . "')
    print("I have added some shit")
    os.system('cmd /c "git commit -m %s "'%commitMsg)
    os.system('cmd /c "git push "')




if __name__ == "__main__":
    webDeploy(sys.argv[1])