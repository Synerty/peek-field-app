/**
 * Created by peek on 4/01/17.
 */

export interface PeekPluginMenuI {
    menuRoot(): PeekPluginMenuItem;
}

export interface PeekPluginMenuItem {
    name: string;
    url: string;
    subItems: PeekPluginMenuItem[];
}