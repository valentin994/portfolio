import sys
import os


def webDeploy(commitMsg):
    os.system('cmd /c "git status "')
    print("status up there")
    os.system('cmd /c "git add . "')
    print("I have added some shit")
    os.system('cmd /c "git commit -m %s "'%commitMsg)



if __name__ == "__main__":
    webDeploy(sys.argv[1])