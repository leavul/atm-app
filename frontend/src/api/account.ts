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

export const depositMoney = async (accountNumber: string, amount: string) => {
    const res = await fetch(`${BASE_URL}/deposit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account_number: accountNumber, amount }),
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong, please try again later");
    }

    return res.json();
}

export const withdrawMoney = async (accountNumber: string, amount: string) => {
    const res = await fetch(`${BASE_URL}/withdraw`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account_number: accountNumber, amount }),
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong, please try again later");
    }

    return res.json();
}