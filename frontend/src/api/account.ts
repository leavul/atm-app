import { BASE_URL } from "./client";

export const verifyAccount = async (accountNumber: string) => {
    const res = await fetch(`${BASE_URL}/balance?account_number=${accountNumber}`);

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong, please try again later");
    }

    const data = await res.json();
    return data;
}