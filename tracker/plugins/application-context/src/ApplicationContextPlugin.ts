import { ApplicationContext } from '@objectiv/schema';
import { makeApplicationContext, TrackerEvent, TrackerPlugin } from '@objectiv/tracker-core';

/**
 * The ApplicationContext Plugin adds an ApplicationContext as GlobalContext before events are transported.
 */
export class ApplicationContextPlugin implements TrackerPlugin {
  readonly pluginName = `ApplicationContextPlugin`;
  readonly applicationContext: ApplicationContext;

  /**
   * Generates a ApplicationContext from the given config applicationId.
   */
  constructor(config: { applicationId: string }) {
    this.applicationContext = makeApplicationContext({
      id: config.applicationId,
    });
  }

  /**
   * Add the the ApplicationContext to the Event's Global Contexts
   */
  beforeTransport(event: TrackerEvent): void {
    event.global_contexts.push(this.applicationContext);
  }

  /**
   * Make this plugin usable only if the Navigator API is available
   */
  isUsable(): boolean {
    return true;
  }
}