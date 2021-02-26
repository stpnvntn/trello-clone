export interface Action<TActionType extends string, TPayload extends object> {
  type: TActionType;
  payload: TPayload;
}
