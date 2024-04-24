// store.js
import create from 'zustand';

type State = {
  isSelectOption: boolean,
  isCutFragOption: boolean;
  isDelFragOption: boolean;
  isTrashOption: boolean;
  isMuteFragOption: boolean;
  setIsSelectOption: (value: boolean) => void;
};

export const ToolsStore = create<State>(set => ({
      isSelectOption: true,
      setIsSelectOption: (value: boolean) => set({ isSelectOption: value }),
    
      isCutFragOption: false,
      setIsCutFragOption: (value: boolean) => set({ isCutFragOption: value }),
    
      isDelFragOption: false,
      setIsDelFragOption: (value: boolean) => set({ isDelFragOption: value }),
    
      isMuteFragOption: false,
      setIsMuteFragOption: (value: boolean) => set({ isMuteFragOption: value }),
    
      isTrashOption: false,
      setIsTrashOption: (value: boolean) => set({ isTrashOption: value }),
      turnOnOption: (option: string) => set(({
        isSelectOption: option === 'select',
        isCutFragOption: option === 'cut',
        isDelFragOption: option === 'delete',
        isMuteFragOption: option === 'mute',
        isTrashOption: option === 'trash',
      })),
}));

