import BaseHooks from '@jacekpietal/gstats/dist/BaseHooks';
import { Renderer } from 'pixi.js';
import { Panel } from './stats-panel';
import { Stats } from './stats';
export declare class StatsJSAdapter {
    stats: Stats;
    hook: any;
    dcPanel: Panel;
    tcPanel: Panel;
    constructor(hook: any, stats?: Stats);
    update(): void;
    reset(): void;
}
export declare class PIXIHooks extends BaseHooks {
    constructor(renderer: Renderer);
}
//# sourceMappingURL=stats-gl.d.ts.map