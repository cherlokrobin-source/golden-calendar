import { EngineHealthMonitor } from "./EngineHealthMonitor.js";
import { PerformanceMonitor } from "./PerformanceMonitor.js";
import { CacheMonitor } from "./CacheMonitor.js";
import { AutoRecovery } from "./AutoRecovery.js";
import { MaintenanceScheduler } from "./MaintenanceScheduler.js";

export class GuardianSystem {

    constructor() {

        this.health =
            new EngineHealthMonitor();

        this.performance =
            new PerformanceMonitor();

        this.cache =
            new CacheMonitor();

        this.recovery =
            new AutoRecovery();

        this.maintenance =
            new MaintenanceScheduler();

        this.running = false;

        this.interval = null;

        this.startedAt = null;

    }

    start(intervalMs = 60000) {

        if (this.running) {

            return false;

        }

        this.running = true;

        this.startedAt = new Date();

        this.interval = setInterval(() => {

            this.tick();

        }, intervalMs);

        return true;

    }

    stop() {

        if (!this.running) {

            return false;

        }

        clearInterval(this.interval);

        this.interval = null;

        this.running = false;

        return true;

    }

    tick() {

        try {

            this.health.check();

        } catch (e) {

            console.error(
                "[Guardian] Health Monitor:",
                e.message
            );

        }

        try {

            if (
                typeof this.cache.check === "function"
            ) {

                this.cache.check();

            }

        } catch (e) {

            console.error(
                "[Guardian] Cache Monitor:",
                e.message
            );

        }

        try {

            if (
                typeof this.recovery.check === "function"
            ) {

                this.recovery.check();

            }

        } catch (e) {

            console.error(
                "[Guardian] Auto Recovery:",
                e.message
            );

        }

        try {

            if (
                typeof this.maintenance.run === "function"
            ) {

                this.maintenance.run();

            }

        } catch (e) {

            console.error(
                "[Guardian] Maintenance:",
                e.message
            );

        }

    }

    report() {

        return {

            guardian:

                "ACTIVE",

            running:

                this.running,

            startedAt:

                this.startedAt,

            health:

                this.health.check(),

            performance:

                this.performance.report()

        };

    }

}
