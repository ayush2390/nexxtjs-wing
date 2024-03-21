"use strict";
let $obj;
async function $initOnce() {
  $obj = $obj || (await (
          (await (async () => {
            const $Closure1Client = 
          require("E:/Users/Ayush Thakur/Desktop/next-wing-1/backend/target/test/main.wsim/.wing/inflight.$Closure1-3.js")({
            $__parent_this_1_env: {"USERNAME": "Ayush Thakur","ComSpec": "E:\\WINDOWS\\system32\\cmd.exe","ORIGINAL_XDG_CURRENT_DESKTOP": "undefined","CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_9768_ABSQHBJZNHWEDEOP","WING_PLATFORMS": "E:\\Users\\Ayush Thakur\\Desktop\\next-wing-1\\sim","ALLUSERSPROFILE": "E:\\ProgramData","SESSIONNAME": "Console","APPDATA": "E:\\Users\\Ayush Thakur\\AppData\\Roaming","CommonProgramFiles": "E:\\Program Files\\Common Files","WING_VALUES_FILE": "","GIT_ASKPASS": "e:\\Users\\Ayush Thakur\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","CommonProgramFiles(x86)": "E:\\Program Files (x86)\\Common Files","COLORTERM": "truecolor","CommonProgramW6432": "E:\\Program Files\\Common Files","PROCESSOR_IDENTIFIER": "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD","COMPUTERNAME": "DESKTOP-MD1N2UG","DriverData": "E:\\Windows\\System32\\Drivers\\DriverData","EFC_27940": "1","PSModulePath": "E:\\Users\\Ayush Thakur\\Documents\\WindowsPowerShell\\Modules;E:\\Program Files\\WindowsPowerShell\\Modules;E:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING": "Default","ProgramFiles": "E:\\Program Files","HOMEDRIVE": "E:","HOMEPATH": "\\Users\\Ayush Thakur","TERM_PROGRAM_VERSION": "1.87.2","LOCALAPPDATA": "E:\\Users\\Ayush Thakur\\AppData\\Local","LOGONSERVER": "\\\\DESKTOP-MD1N2UG","WING_IMPORTED_NAMESPACES": "","SystemDrive": "E:","NUMBER_OF_PROCESSORS": "8","LANG": "en_US.UTF-8","OneDrive": "E:\\Users\\Ayush Thakur\\OneDrive","WING_SYNTH_DIR": "E:\\Users\\Ayush Thakur\\Desktop\\next-wing-1\\backend\\target\\test\\main.wsim","OS": "Windows_NT","PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL","ProgramFiles(x86)": "E:\\Program Files (x86)","PROCESSOR_ARCHITECTURE": "AMD64","WING_SOURCE_DIR": "E:\\Users\\Ayush Thakur\\Desktop\\next-wing-1\\backend","PROCESSOR_LEVEL": "23","PROCESSOR_REVISION": "1801","ProgramData": "E:\\ProgramData","ProgramW6432": "E:\\Program Files","PUBLIC": "E:\\Users\\Public","VSCODE_GIT_ASKPASS_NODE": "E:\\Users\\Ayush Thakur\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","SystemRoot": "E:\\WINDOWS","TEMP": "E:\\Users\\AYUSHT~1\\AppData\\Local\\Temp","VSCODE_GIT_ASKPASS_EXTRA_ARGS": "","TMP": "E:\\Users\\AYUSHT~1\\AppData\\Local\\Temp","PATH": "E:\\WINDOWS\\system32;E:\\WINDOWS;E:\\WINDOWS\\System32\\Wbem;E:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;E:\\WINDOWS\\System32\\OpenSSH\\;E:\\Program Files\\Git\\cmd;E:\\Program Files\\PostgreSQL\\15\\bin;;E:\\Program Files\\Docker\\Docker\\resources\\bin;E:\\Program Files\\nodejs\\;E:\\Program Files\\dotnet\\;E:\\Users\\Ayush Thakur\\AppData\\Local\\Microsoft\\WindowsApps;;E:\\Users\\Ayush Thakur\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;E:\\Users\\Ayush Thakur\\AppData\\Roaming\\npm;C:\\ACCECLQAGENT\\ACCELQAgent\\Dashboard\\bin","USERDOMAIN": "DESKTOP-MD1N2UG","USERDOMAIN_ROAMINGPROFILE": "DESKTOP-MD1N2UG","USERPROFILE": "E:\\Users\\Ayush Thakur","windir": "E:\\WINDOWS","TERM_PROGRAM": "vscode","VSCODE_GIT_ASKPASS_MAIN": "e:\\Users\\Ayush Thakur\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-aefe7607e0-sock","VSCODE_INJECTION": "1","WING_TARGET": "sim","WING_IS_TEST": "true","WING_VALUES": "undefined","WING_NODE_MODULES": "E:\\Users\\Ayush Thakur\\Desktop\\next-wing-1","API_URL": process.env["WING_TOKEN_WSIM_ROOT_ENV0_API_ATTRS_URL"],"PORT": "4500",},
            $__parent_this_1_path: "E:\\Users\\Ayush Thakur\\Desktop\\next-wing-1\\backend\\client",
            $startCommand: "npm run dev",
            $utils_Utils: 
      require("E:/Users/Ayush Thakur/Desktop/next-wing-1/backend/target/test/main.wsim/.wing/inflight.Utils-1.js")({
      })
    ,
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ));
  return $obj;
};
exports.handle = async function() {
  return (await $initOnce()).handle();
};