package com.tsfintech.tbp.api.dto;

public class AccountInfo {

    private String loanSendAccount;

    private String loanReceiveAccount;

    private String repaymentSendAccount;

    private String repaymentReceiveAccount;

    public String getLoanSendAccount() {
        return loanSendAccount;
    }

    public void setLoanSendAccount(String loanSendAccount) {
        this.loanSendAccount = loanSendAccount;
    }

    public String getLoanReceiveAccount() {
        return loanReceiveAccount;
    }

    public void setLoanReceiveAccount(String loanReceiveAccount) {
        this.loanReceiveAccount = loanReceiveAccount;
    }

    public String getRepaymentSendAccount() {
        return repaymentSendAccount;
    }

    public void setRepaymentSendAccount(String repaymentSendAccount) {
        this.repaymentSendAccount = repaymentSendAccount;
    }

    public String getRepaymentReceiveAccount() {
        return repaymentReceiveAccount;
    }

    public void setRepaymentReceiveAccount(String repaymentReceiveAccount) {
        this.repaymentReceiveAccount = repaymentReceiveAccount;
    }
}
