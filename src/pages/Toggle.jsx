import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Frame, FrameContextConsumer } from 'react-frame-component';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const Toggle = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
                enabled ? 'bg-coral-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2'
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
            />
        </Switch>
    );
};

export const ToggleIcon = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
                enabled ? 'bg-coral-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2'
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
            >
        <span
            className={classNames(
                enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
            className={classNames(
                enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-coral-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
        </Switch>
    );
};

export const Checkbox = ({ disabled, label, description }) => {
    return (
        <fieldset>
            <legend className="sr-only">Notifications</legend>
            <div className="space-y-5">
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="checkbox"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            disabled={disabled}
                            className={`h-4 w-4 rounded border-gray-300 focus:ring-coral-600 ${
                                disabled ? 'text-gray-400 cursor-not-allowed bg-gray-100' : 'text-coral-600'
                            }`}
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="comments" className={`font-medium ${
                        disabled ? 'text-gray-500' : 'text-gray-900'
                        }`}>
                            {label}
                        </label>
                        <p id="comments-description" className="text-gray-500">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export const Radio = ({ disabled, label, description }) => {

    return (
        <fieldset>
            <div className="mt-4">
                <div className="relative flex items-start py-4">
                    <div className="ml-3 flex h-6 items-center">
                        <input
                            id="option"
                            name="option"
                            type="radio"
                            disabled={disabled}
                            className={`h-4 w-4 border-gray-300 ${
                                disabled ? 'text-gray-400 cursor-not-allowed bg-gray-100' : 'text-coral-600'
                            } focus:ring-coral-600`}
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                            {label}
                        </label>
                        <p id="comments-description" className="text-gray-500">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};