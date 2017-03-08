"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var file_system_1 = require("file-system");
var SEPARATOR = "#";
var PeekModuleFactoryLoader = (function () {
    function PeekModuleFactoryLoader(compiler) {
        this.compiler = compiler;
    }
    PeekModuleFactoryLoader.prototype.load = function (path) {
        var _a = this.splitPath(path), modulePath = _a.modulePath, exportName = _a.exportName;
        var loadedModule = require(modulePath)[exportName];
        if (!loadedModule) {
            throw new Error("Cannot find \"" + exportName + "\" in \"" + modulePath + "\"");
        }
        return this.compiler.compileModuleAsync(loadedModule);
    };
    PeekModuleFactoryLoader.prototype.splitPath = function (path) {
        var _a = path.split(SEPARATOR), modulePath = _a[0], exportName = _a[1];
        modulePath = getAbsolutePath(modulePath);
        if (typeof exportName === "undefined") {
            exportName = "default";
        }
        return { modulePath: modulePath, exportName: exportName };
    };
    return PeekModuleFactoryLoader;
}());
PeekModuleFactoryLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Compiler])
], PeekModuleFactoryLoader);
exports.PeekModuleFactoryLoader = PeekModuleFactoryLoader;
function getAbsolutePath(relativePath) {
    return file_system_1.path.normalize(file_system_1.path.join(file_system_1.knownFolders.currentApp().path, relativePath));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWxvYWRlci5ucy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLWxvYWRlci5ucy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FLdUI7QUFFdkIsMkNBQWlEO0FBRWpELElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUd0QixJQUFhLHVCQUF1QjtJQUVoQyxpQ0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDO0lBRUQsc0NBQUksR0FBSixVQUFLLElBQVk7UUFDVCxJQUFBLHlCQUErQyxFQUE5QywwQkFBVSxFQUFFLDBCQUFVLENBQXlCO1FBRXBELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBZ0IsVUFBVSxnQkFBUyxVQUFVLE9BQUcsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sMkNBQVMsR0FBakIsVUFBa0IsSUFBWTtRQUN0QixJQUFBLDBCQUFnRCxFQUEvQyxrQkFBVSxFQUFFLGtCQUFVLENBQTBCO1FBQ3JELFVBQVUsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekMsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFFRCxNQUFNLENBQUMsRUFBQyxVQUFVLFlBQUEsRUFBRSxVQUFVLFlBQUEsRUFBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksdUJBQXVCO0lBRG5DLGlCQUFVLEVBQUU7cUNBR3FCLGVBQVE7R0FGN0IsdUJBQXVCLENBMEJuQztBQTFCWSwwREFBdUI7QUE0QnBDLHlCQUF5QixZQUFvQjtJQUN6QyxNQUFNLENBQUMsa0JBQUksQ0FBQyxTQUFTLENBQUMsa0JBQUksQ0FBQyxJQUFJLENBQUMsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNuRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBJbmplY3RhYmxlLFxuICAgIENvbXBpbGVyLFxuICAgIE5nTW9kdWxlRmFjdG9yeSxcbiAgICBOZ01vZHVsZUZhY3RvcnlMb2FkZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgcGF0aCwga25vd25Gb2xkZXJzIH0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5cbmNvbnN0IFNFUEFSQVRPUiA9IFwiI1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGVla01vZHVsZUZhY3RvcnlMb2FkZXIgaW1wbGVtZW50cyBOZ01vZHVsZUZhY3RvcnlMb2FkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICB9XG5cbiAgICBsb2FkKHBhdGg6IHN0cmluZyk6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PGFueT4+IHtcbiAgICAgICAgbGV0IHttb2R1bGVQYXRoLCBleHBvcnROYW1lfSA9IHRoaXMuc3BsaXRQYXRoKHBhdGgpO1xuXG4gICAgICAgIGxldCBsb2FkZWRNb2R1bGUgPSByZXF1aXJlKG1vZHVsZVBhdGgpW2V4cG9ydE5hbWVdO1xuICAgICAgICBpZiAoIWxvYWRlZE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBcIiR7ZXhwb3J0TmFtZX1cIiBpbiBcIiR7bW9kdWxlUGF0aH1cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZXIuY29tcGlsZU1vZHVsZUFzeW5jKGxvYWRlZE1vZHVsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGxpdFBhdGgocGF0aDogc3RyaW5nKToge21vZHVsZVBhdGg6IHN0cmluZywgZXhwb3J0TmFtZTogc3RyaW5nfSB7XG4gICAgICAgIGxldCBbbW9kdWxlUGF0aCwgZXhwb3J0TmFtZV0gPSBwYXRoLnNwbGl0KFNFUEFSQVRPUik7XG4gICAgICAgIG1vZHVsZVBhdGggPSBnZXRBYnNvbHV0ZVBhdGgobW9kdWxlUGF0aCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBleHBvcnROYW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHBvcnROYW1lID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge21vZHVsZVBhdGgsIGV4cG9ydE5hbWV9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWJzb2x1dGVQYXRoKHJlbGF0aXZlUGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhdGgubm9ybWFsaXplKHBhdGguam9pbihrbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLnBhdGgsIHJlbGF0aXZlUGF0aCkpO1xufVxuIl19