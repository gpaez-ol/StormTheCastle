type InferRecordValueArg<Type> = Type extends Record<
    string | number | symbol,
    infer X
>
    ? X
    : never;

export const isJsonString = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export type { InferRecordValueArg };
