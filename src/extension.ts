import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vscodeworkflowtest.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Check Respository for Vs Code Workflow Test"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
