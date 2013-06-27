error() {
    local red=${txtbld}$(tput setaf 1)
    local reset=$(tput sgr0) 
    echo "${red}FAIL${reset} $1"
}

ok() {
    local green=${txtbld}$(tput setaf 2)
    local reset=$(tput sgr0) 
    echo " ${green}WIN${reset} $1"
}

warn() {
    local yellow=${txtbld}$(tput setaf 3)
    local reset=$(tput sgr0) 
    echo "${yellow}$1${reset} $2"
}

info() {
    local grey=$(tput setaf 8)
    local blue=$(tput setaf 6)
    local reset=$(tput sgr0) 
    echo "${blue}$1${reset} $2"
}
