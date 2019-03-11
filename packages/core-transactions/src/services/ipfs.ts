import { Database } from "@arkecosystem/core-interfaces";
import { constants, models, Transaction } from "@arkecosystem/crypto";
import { TransactionService } from "./transaction";

export class IpfsTransactionService extends TransactionService {
    public getType(): number {
        return constants.TransactionTypes.Ipfs;
    }

    public canBeApplied(
        transaction: Transaction,
        wallet: models.Wallet,
        walletManager?: Database.IWalletManager,
    ): boolean {
        return super.canBeApplied(transaction, wallet, walletManager);
    }

    public apply(transaction: Transaction, wallet: models.Wallet): void {
        return;
    }

    public revert(transaction: Transaction, wallet: models.Wallet): void {
        return;
    }
}