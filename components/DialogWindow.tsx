// Core
import { FC } from 'react';

import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

import Button from '@material-ui/core/Button';

type PropTypes = {
  children?: never;
  open: boolean;
  onSuccess: () => void;
  onFailed: () => void;
  successTitle: string;
  failedTitle: string;
  title: string;
  text: string;
}

export const DialogWindow: FC<PropTypes> = (
  { 
    onFailed,
    onSuccess,
    open,
    title,
    text,
    successTitle,
    failedTitle,
  }: PropTypes,
) => (
  <Dialog 
    open={open}
    onClose={onFailed}
  >
    <DialogTitle>
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        {text}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={onSuccess}>
        {successTitle}
      </Button>

      <Button onClick={onFailed}>
        {failedTitle}
      </Button>
    </DialogActions>
  </Dialog>
);
