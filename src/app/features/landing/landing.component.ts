import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css'
})
export class LandingComponent {
    authService = inject(AuthService);
    router = inject(Router);

    isLogin = signal(true);
    isLoading = signal(false);
    errorMessage = signal('');
    successMessage = signal('');
    showForgotPassword = signal(false);
    showVerificationPending = signal(false);
    pendingEmail = signal('');
    emailError = signal('');

    email = '';
    password = '';
    forgotEmail = '';

    toggleMode() {
        this.isLogin.set(!this.isLogin());
        this.errorMessage.set('');
        this.successMessage.set('');
    }

    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showForgotPasswordForm() {
        this.showForgotPassword.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');
        this.emailError.set('');
    }

    cancelForgotPassword() {
        this.showForgotPassword.set(false);
        this.forgotEmail = '';
        this.errorMessage.set('');
        this.successMessage.set('');
        this.emailError.set('');
    }

    backToLogin() {
        this.showVerificationPending.set(false);
        this.pendingEmail.set('');
        this.isLogin.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');
    }

    async resendVerificationEmail() {
        if (!this.pendingEmail()) {
            this.errorMessage.set('No email address to resend to');
            return;
        }

        this.isLoading.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');

        try {
            const { error } = await this.authService.resendVerificationEmail(this.pendingEmail());
            if (error) throw error;

            this.successMessage.set('Verification email sent! Please check your inbox.');
        } catch (err: any) {
            this.errorMessage.set(err.message || 'Failed to resend verification email');
        } finally {
            this.isLoading.set(false);
        }
    }

    async onForgotPassword() {
        this.emailError.set('');
        this.errorMessage.set('');
        this.successMessage.set('');

        if (!this.forgotEmail) {
            this.emailError.set('Email is required');
            return;
        }

        if (!this.validateEmail(this.forgotEmail)) {
            this.emailError.set('Please enter a valid email address');
            return;
        }

        this.isLoading.set(true);

        try {
            const { error } = await this.authService.resetPassword(this.forgotEmail);
            if (error) throw error;

            this.successMessage.set('Password reset email sent! Please check your inbox.');
            this.forgotEmail = '';

            setTimeout(() => {
                this.cancelForgotPassword();
            }, 3000);
        } catch (err: any) {
            this.errorMessage.set(err.message || 'Failed to send reset email');
        } finally {
            this.isLoading.set(false);
        }
    }

    async onSubmit() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');

        // Accept any email/password, even if empty, and mock login
        try {
            const result = await this.authService.signInAsAdmin();
            if (result.error) throw result.error;
            this.isLoading.set(false);
            return;
        } catch (err: any) {
            this.errorMessage.set(err.message || 'Error occurred during login');
            this.isLoading.set(false);
            return;
        }
    }
}
