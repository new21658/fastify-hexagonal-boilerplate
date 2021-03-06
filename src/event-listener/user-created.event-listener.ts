import { BaseEventListener } from "@lib/event/base.event-listener";
import { inject, injectable } from "inversify";
import { EventType } from "@core/event/event-type.constant";
import { Types } from "@types";
import { IndexUserQueue } from "@queue/index-user.queue";

@injectable()
export class UserCreatedEventListener extends BaseEventListener {
  constructor(
    @inject(Types.EventEmitter) eventEmitter,
    @inject(Types.IndexUserQueue) private indexUserQueue: IndexUserQueue
  ) {
    super(eventEmitter, EventType.userCreated);
  }
  handler(data: any) {
    this.indexUserQueue.add(data);
  }
}
